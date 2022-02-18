import moment from 'moment';

export default class Helpers {
    static Filters = {
        Empty: "--No especificado",
        EmptyText() {
          return this.Empty;
        },
        Date(value: string, format = "L") {
          if (!value) return this.Empty;
          return moment(value).format(format);
        },
    }
}