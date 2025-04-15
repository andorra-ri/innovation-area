import { FORMAT } from 'models/ui'
import dayjs from "dayjs";
import "dayjs/locale/ca"; // Importa la localización catalana
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

dayjs.updateLocale("ca", {
    months: [
      "gener", "febrer", "març", "abril", "maig", "juny", 
      "juliol", "agost", "setembre", "octubre", "novembre", "desembre"
    ],
});

class UtilsService {
    public today() {
        return dayjs()
    }
    public formatDate(date: string, format: FORMAT): string {
        return dayjs(date).locale("ca").format(format)
    }
}

export const utilsService = new UtilsService()
