import {ActionMetadata} from "./ActionMetadata";
import {SocketControllerMetadataArgs} from "./args/SocketControllerMetadataArgs";
import {getFromContainer} from "../container";

export class ControllerMetadata {

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    /**
     * Controller actions.
     */
    actions: ActionMetadata[];

    /**
     * Indicates object which is used by this controller.
     */
    target: Function;

    /**
     * Base route for all actions registered in this controller.
     */
    namespace: string;

    /**
     * Prefix for actions
     */
    prefix?: string;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(args: SocketControllerMetadataArgs) {
        this.target = args.target;
        this.namespace = args.namespace;
        this.prefix = args.prefix;
    }

    // -------------------------------------------------------------------------
    // Accessors
    // -------------------------------------------------------------------------

    get instance(): any {
        return getFromContainer(this.target);
    }

    get rootActions() {
        return this.actions.filter(action => !action.after);
    }
}