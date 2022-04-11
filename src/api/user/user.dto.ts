import { IsOptional, IsString, ValidateNested } from 'class-validator';
import CreateAddressDto from './address.dto';

class CreateUserDto {

  public firstName: string;

    public lastName: string;


  public email: string;


   public password: string;

 
  public  address: CreateAddressDto;
  constructor(firstName: string,lastName: string,email: string,password: string,address:CreateAddressDto){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.password=password;
    this.address=address;
  }

}

export default CreateUserDto;
