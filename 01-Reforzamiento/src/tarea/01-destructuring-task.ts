
const useState = (value: string) => {
    return [
        value, (data: string) => {
            console.log(data);
        }
    ] as const;
}

const [name, setName] = useState('Ana');
console.log(name);
setName('sofia');
