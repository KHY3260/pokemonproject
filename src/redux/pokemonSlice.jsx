import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    selectedPokemon: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      if (state.selectedPokemon.length >= 6) {
        alert("6마리 포켓몬을 초과할 수 없습니다.");
      } else if (
        !state.selectedPokemon.find((p) => p.id === action.payload.id)
      ) {
        state.selectedPokemon.push(action.payload);
      }
    },
    removePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
