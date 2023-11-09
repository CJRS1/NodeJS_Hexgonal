import Result from "src/shared/application/interface/result.interface";
import { AuthModel } from "../models/auth.model";
import { TokensModel } from "../models/tokens.model";

export interface AuthRepository {
    login(auth: AuthModel): Promise<Result<TokensModel>>;
    getNewAccessToken(refreshToken: string): Promise<Result<TokensModel>>;
}
