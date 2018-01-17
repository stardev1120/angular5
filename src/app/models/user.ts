import { BaseModel } from "../_services/base-model";
import { Loan } from "./loan";
import { Country } from "./country";

export class User implements BaseModel {
    public fname: string;
    public mname: string;
    public lname: string;
    public email: string;
    public dob: Date;
    public user_location: string;
    public access_token: string;
    public accept: number;
    public no_of_active_loans: number;
    public available_amount: number;
    public min_availalble_amount: number;
    public number_of_attempts: number;
    public last_attempts_time: Date;
    public created_at: Date;
    public umbrella_score: number;
    public fbId: string;
    public smscode: string;
    public uScore_status: string;
    public id_proof_file: string;
    public selfie_proof_file: string;
    public address_proof_file: string;
    public id_verification_status: string;
    public address_verification_status: string;
    public phone_number: string;
    public verified: boolean;
    public status: string;
    public sex: string;
    public profilepic: string;
    public relationship: string;
    public country_id: number;
    public country: Country;
    public loans: Loan[];
    public id?: string;
}