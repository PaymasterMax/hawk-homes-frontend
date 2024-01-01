import { browser } from '$app/environment';
import type { HouseFetch } from '$interface/house';
import { writable } from 'svelte/store';

const compareHouses = writable<{ houses: HouseFetch[] }>(browser && JSON.parse(localStorage.getItem("compare") || '{"houses":[]}'));

compareHouses.subscribe((value) => {
    browser &&
        localStorage.setItem("compare", JSON.stringify(value))
})
export default compareHouses;