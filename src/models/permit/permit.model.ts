import Base from "../base/base.model";
import PermitType from "../permit-type/permit-type.model";

export default class Permit extends Base {
    public employeeName = "";
    public employeeLastname = "";
    public permitTypeId = 0;
    public permitType: PermitType | undefined;
    public permitDate!: Date | string;
}