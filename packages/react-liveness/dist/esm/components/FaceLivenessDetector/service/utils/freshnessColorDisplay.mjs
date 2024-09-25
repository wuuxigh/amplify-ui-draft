import { fillOverlayCanvasFractional, getRGBArrayFromColorString } from './liveness.mjs';

const TICK_RATE = 10; // ms -- the rate at which we will render/check colors
var COLOR_STAGE;
(function (COLOR_STAGE) {
    COLOR_STAGE["SCROLLING"] = "SCROLLING";
    COLOR_STAGE["FLAT"] = "FLAT";
})(COLOR_STAGE || (COLOR_STAGE = {}));
class FreshnessColorDisplay {
    constructor(context, freshnessColorsSequence) {
        this.context = context;
        this.freshnessColorsSequence = freshnessColorsSequence;
        this.isFirstTick = true;
    }
    async displayColorTick() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.displayNextColorTick(resolve, reject);
            }, Math.min(TICK_RATE));
        });
    }
    init() {
        this.stageIndex = 0;
        this.currColorIndex = 0;
        this.currColorSequence = this.freshnessColorsSequence[0];
        this.prevColorSequence = this.freshnessColorsSequence[0];
        this.stage = COLOR_STAGE.FLAT;
        this.timeLastFlatOrScrollChange = Date.now();
        this.timeLastFaceMatchChecked = Date.now();
    }
    displayNextColorTick(resolve, _) {
        const { freshnessColorEl } = this.context.freshnessColorAssociatedParams;
        const { ovalDetails, scaleFactor } = this.context.ovalAssociatedParams;
        const { videoEl } = this.context.videoAssociatedParams;
        const tickStartTime = Date.now();
        // Send a colorStart time only for the first tick of the first color
        if (this.isFirstTick) {
            this.init();
            this.isFirstTick = false;
            this.sendColorStartTime({
                tickStartTime: tickStartTime,
                currColor: this.currColorSequence.color,
                prevColor: this.currColorSequence.color,
                currColorIndex: this.stageIndex,
            });
        }
        let timeSinceLastColorChange = tickStartTime - this.timeLastFlatOrScrollChange;
        freshnessColorEl.style.display = 'block';
        // Every 10 ms tick we will check if the threshold for flat or scrolling, if so we will try to go to the next stage
        if ((this.stage === COLOR_STAGE.FLAT &&
            timeSinceLastColorChange >=
                this.currColorSequence.flatDisplayDuration) ||
            (this.stage === COLOR_STAGE.SCROLLING &&
                timeSinceLastColorChange >= this.currColorSequence.downscrollDuration)) {
            this.incrementStageIndex(tickStartTime);
            timeSinceLastColorChange = 0;
        }
        // Every 10 ms tick we will update the colors displayed
        if (this.currColorIndex < this.freshnessColorsSequence.length) {
            const heightFraction = timeSinceLastColorChange /
                (this.stage === COLOR_STAGE.SCROLLING
                    ? this.currColorSequence.downscrollDuration
                    : this.currColorSequence.flatDisplayDuration);
            fillOverlayCanvasFractional({
                overlayCanvas: freshnessColorEl,
                prevColor: this.prevColorSequence.color,
                nextColor: this.currColorSequence.color,
                videoEl: videoEl,
                ovalDetails: ovalDetails,
                heightFraction,
                scaleFactor: scaleFactor,
            });
            resolve(false);
        }
        else {
            freshnessColorEl.style.display = 'none';
            resolve(true);
        }
    }
    // FLAT - prev = 0, curr = 0
    // SCROLL - prev = 0, curr = 1
    // FLAT - prev = 1, curr = 1
    // SCROLL - prev = 1, curr = 2
    // SCROLL - prev = 2, curr = 3
    incrementStageIndex(tickStartTime) {
        this.stageIndex += 1;
        this.prevColorSequence = this.freshnessColorsSequence[this.currColorIndex];
        if (this.stage === COLOR_STAGE.FLAT) {
            this.currColorIndex += 1;
            this.stage = COLOR_STAGE.SCROLLING;
        }
        else if (this.stage === COLOR_STAGE.SCROLLING) {
            const nextFlatColor = this.freshnessColorsSequence[this.currColorIndex];
            if (nextFlatColor.flatDisplayDuration > 0) {
                this.stage = COLOR_STAGE.FLAT;
            }
            else {
                this.stage = COLOR_STAGE.SCROLLING;
                this.currColorIndex += 1;
            }
        }
        this.currColorSequence = this.freshnessColorsSequence[this.currColorIndex];
        this.timeLastFlatOrScrollChange = Date.now();
        if (this.currColorSequence) {
            this.sendColorStartTime({
                tickStartTime: tickStartTime,
                currColor: this.currColorSequence.color,
                prevColor: this.prevColorSequence.color,
                currColorIndex: this.stageIndex,
            });
        }
    }
    sendColorStartTime({ tickStartTime, currColor, prevColor, currColorIndex, }) {
        const { livenessStreamProvider, challengeId } = this.context;
        livenessStreamProvider.sendClientInfo({
            Challenge: {
                FaceMovementAndLightChallenge: {
                    ChallengeId: challengeId,
                    ColorDisplayed: {
                        CurrentColor: { RGB: getRGBArrayFromColorString(currColor) },
                        PreviousColor: { RGB: getRGBArrayFromColorString(prevColor) },
                        SequenceNumber: currColorIndex,
                        CurrentColorStartTimestamp: tickStartTime,
                    },
                },
            },
        });
    }
}

export { FreshnessColorDisplay };
