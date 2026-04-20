import { test, expect, describe } from 'vitest'
import { getAPIKey } from "./api/auth.js";

const headers = {
    "Content-Type": "application/json",
    "authorization": "ApiKey random-key",
    "Accept": "application/json",
}

describe("Tests", () => {

    test("Getting An Api Key", async () => {
        const value = getAPIKey(headers);
        expect(value).toBe("random-key");
    });

});