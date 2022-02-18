import PermitType from "@/models/permit-type/permit-type.model";
import BaseService from "../base/base.service";

export default class PermitTypeService extends BaseService<PermitType>{
    constructor() {
        super("PermitType");
    }
}