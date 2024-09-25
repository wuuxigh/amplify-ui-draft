import { LivenessContext } from '../types/machine';
import { ClientFreshnessColorSequence } from '../types/service';
export declare class FreshnessColorDisplay {
    private freshnessColorsSequence;
    private context;
    private stageIndex;
    private stage;
    private currColorIndex;
    private currColorSequence;
    private prevColorSequence;
    private timeLastFlatOrScrollChange;
    private timeFaceMatched;
    private timeLastFaceMatchChecked;
    private isFirstTick;
    constructor(context: LivenessContext, freshnessColorsSequence: ClientFreshnessColorSequence[]);
    displayColorTick(): Promise<boolean>;
    private init;
    private displayNextColorTick;
    private incrementStageIndex;
    private sendColorStartTime;
}
