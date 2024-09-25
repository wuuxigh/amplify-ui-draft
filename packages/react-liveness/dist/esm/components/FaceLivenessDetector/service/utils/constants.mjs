// Face distance is calculated as pupilDistance / ovalWidth.
// The further away you are from the camera the distance between your pupils will decrease, thus lowering the threshold values.
// These FACE_DISTANCE_THRESHOLD values are determined by the science team and should only be changed with their approval.
// We want to ensure at the start of a  check that the user's pupilDistance/ovalWidth is below FACE_DISTANCE_THRESHOLD to ensure that they are starting
//  a certain distance away from the camera.
const FACE_DISTANCE_THRESHOLD = 0.32;
const REDUCED_THRESHOLD = 0.4;
const REDUCED_THRESHOLD_MOBILE = 0.37;
// Constants from science team to determine ocular distance (space between eyes)
const PUPIL_DISTANCE_WEIGHT = 2.0;
const FACE_HEIGHT_WEIGHT = 1.8;
// Constants from science team to find face match percentage
const FACE_MATCH_RANGE_MIN = 0;
const FACE_MATCH_RANGE_MAX = 1;
const FACE_MATCH_WEIGHT_MIN = 0.25;
const FACE_MATCH_WEIGHT_MAX = 0.75;
const WS_CLOSURE_CODE = {
    SUCCESS_CODE: 1000,
    DEFAULT_ERROR_CODE: 4000,
    FACE_FIT_TIMEOUT: 4001,
    USER_CANCEL: 4003,
    RUNTIME_ERROR: 4005,
    USER_ERROR_DURING_CONNECTION: 4007,
};

export { FACE_DISTANCE_THRESHOLD, FACE_HEIGHT_WEIGHT, FACE_MATCH_RANGE_MAX, FACE_MATCH_RANGE_MIN, FACE_MATCH_WEIGHT_MAX, FACE_MATCH_WEIGHT_MIN, PUPIL_DISTANCE_WEIGHT, REDUCED_THRESHOLD, REDUCED_THRESHOLD_MOBILE, WS_CLOSURE_CODE };
