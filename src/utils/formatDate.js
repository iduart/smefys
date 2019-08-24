import moment from 'moment';
import idLocale from 'moment/locale/es' 

moment.locale('es', idLocale);

//moment en español
export const esMoment = moment;

export const formatDate = (date) => esMoment(new Date(date)).format('LL');