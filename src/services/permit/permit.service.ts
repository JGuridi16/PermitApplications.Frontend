import Permit from "@/models/permit/permit.model";
import BaseService from "../base/base.service";

export default class PermitService extends BaseService<Permit>{
    constructor() {
        super("Permit");
    }
}