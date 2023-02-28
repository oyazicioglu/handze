import { OrthographicCamera, PerspectiveCamera } from "three"

type CameraControlsProps = {
    /** The camera to control, default to the state's `camera` */
    camera?: PerspectiveCamera | OrthographicCamera
    /** DOM element to connect to, default to the state's `gl` renderer */
    domElement?: HTMLElement
    /** Reference this CameraControls instance as state's `controls` */
    makeDefault?: boolean
    /** Events callbacks, see: https://github.com/yomotsu/camera-controls#events */
    onStart?: (e?: { type: 'controlstart' }) => void
    onEnd?: (e?: { type: 'controlend' }) => void
    onChange?: (e?: { type: 'update' }) => void
}

export const Camera = (props: CameraControlsProps) => {

}