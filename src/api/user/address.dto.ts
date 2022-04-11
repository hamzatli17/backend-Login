import { IsString } from 'class-validator';

class CreateAddressDto {

  public street: string;
 
  public city: string;

  public country: string;
  constructor(street:string, city:string,country:string){
    this.street = street;
    this.city = city;
this.country = country
  }
}

export default CreateAddressDto;
