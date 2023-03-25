import { AdressData } from "./adress";
import { CompanyData } from "./company";

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: AdressData;
  phone: string;
  website: string;
  company: CompanyData;
}
