import data from "./organizations.json";
const getData = () => {
    const prom = Promise.resolve(data);
    return prom;
}

export default getData;