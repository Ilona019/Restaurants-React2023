import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/mock-normalized";

const initialState = {
    entities: normalizedUsers.reduce((acc, user) => {
        acc[user.id] = user;

        return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id)
}

const { reducer } = createSlice({
    name: "user",
    initialState
});

export default reducer;
