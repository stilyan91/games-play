import { request } from "../lib/request";

const base_url = 'http://localhost:3030/jsonstore/games'

export const create = async (gameData) => {
    const response = await fetch(`${base_url}`,{
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(gameData)
                    });

    const result = await response.json();
    return result;
};

export const getAllGames = async () => {
    const response = await fetch(`${base_url}`);
    const result = await response.json();
    return Object.values(result);
    
};

export const getOne = async (gameId) => {
    const response = await fetch(`${base_url}/${gameId}`);
    const result = await response.json();
    return result;
}