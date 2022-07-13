import { USER_ROLES } from "../../src/model/User"
import { AuthenticationData } from "../../src/services/tokenGenerator"

export class TokenGeneratorMock {
    public generate = (input: AuthenticationData): string => {
        return "token"
    }

    public verify(token: string) {
        return {
            id: "id_mock",
            role: USER_ROLES.NORMAL
        }
    }
} 