export const fetchs = url => {
    const firstPath = "pessoa";
    const secondPath = "tvshows";
    // dados do servidor 
    const serverData = () => {
        const peopleServer = [
            {
                id: 1,
                nome: "Bruno",
                sobrenome: "alves",
                idade: 19,
                pai: "Claudinei",
                mãe: "Luzinete",
                cidade: "juara"
            },
            {
                id: 2,
                nome: "Clauan",
                sobrenome: "oliveira",
                idade: 9,
                pai: "Claudinei",
                mãe: "Adreia",
                cidade: "juara"
            },
            {
                id: 3,
                nome: "Daniely",
                sobrenome: "vanilde",
                idade: 4,
                pai: "Claudinei",
                mãe: "Andreia",
                cidade: "juara"
            },
            {
                id: 4,
                nome: "Isabela",
                sobrenome: "Oliveira",
                idade: 16,
                pai: "Claudinei",
                mãe: "Andreia",
                cidade: "juara"
            },
            {
                id: 5,
                nome: "Vitória",
                sobrenome: "Oliveira",
                idade: 15,
                pai: "Claudinei",
                mãe: "Andreia",
                cidade: "juara"
            },
            {
                id: 6,
                nome: "Claudinei",
                sobrenome: "Dos Santos",
                idade: 54,
                pai: "Geraldo",
                mãe: "Vanilde",
                cidade: "juara"
            },
            {
                id: 7,
                nome: "Andreia",
                sobrenome: "Oliveira",
                idade: 33,
                pai: "Airton",
                mãe: "Maria",
                cidade: "juara"
            },
            {
                id: 8,
                nome: "Luzinete",
                sobrenome: "alves",
                idade: 39,
                pai: "João",
                mãe: "Maria",
                cidade: "colider"
            },
            {
                id: 9,
                nome: "jose",
                sobrenome: "Henrique",
                idade: 10,
                pai: "Serrado",
                mãe: "Luzinete",
                cidade: "colider"
            }
        ];
        const tvShows = [
            { id: 1, name: 'Breaking bad', releaseYear: 2008 },
            { id: 2, name: 'Mr. Robot', releaseYear: 2015 },
            { id: 3, name: 'True Detective', releaseYear: 2014 },
            { id: 4, name: 'Hannibal', releaseYear: 2013 },
            { id: 5, name: 'The Handmaid\'s Tale', releaseYear: 2017 },
            { id: 6, name: 'House M.D', releaseYear: 2004 },
            { id: 7, name: 'watchmen', releaseYear: 2019 },
        ];
        return {
            peopleServer,
            tvShows
        }
    }
    const catchers = () => {
        let catcherOperators;

        const divideUrl = divisor => url.split(divisor);
        const filterUrl = (array, filter) => array.filter(cur => cur === filter);


        return catcherOperators = {
            getNumberOfData() {
                const numberOfDataOnTheServer = serverData();
                const dataLength = {}
                for (let index in numberOfDataOnTheServer) {
                    dataLength[index + "Id"] = numberOfDataOnTheServer[index].length + 1;
                }

                return dataLength;
            },
            getPath() {
                const urlPath = divideUrl("/");
                const path = urlPath
                    .filter(cur => cur === firstPath || cur === secondPath)[0];

                return path || false;
            },
            getId() {
                const serverIds = catcherOperators.getNumberOfData();
                const path = catcherOperators.getPath();
                console.log(serverIds)
                const filterIds = (array, serverId) => array
                    .filter(cur => Number(cur) > 0 && Number(cur) < serverId || cur === "all")[0];

                const splitId = divideUrl("=");

                const checkReferringId = referring => {
                    const referringId = {};

                    referringId.pessoa = serverIds.peopleServerId;
                    referringId.tvshows = serverIds.tvShowsId;

                    return referringId[referring] || false
                }

                const id = filterIds(splitId, checkReferringId(path));
                console.log(id)
                return id || false;
            },
            getDomain() {
                const domainFull = filterUrl(divideUrl("/"), "www.pessoastexte.com.br")[0];
                const splitDomains = domainFull.split(".");
                const subDomain = splitDomains[0];
                const domain = splitDomains[1];
                const gTld = splitDomains[2];
                const ccTld = splitDomains[3];
                return {
                    domainFull,
                    subDomain,
                    domain,
                    gTld,
                    ccTld,
                    splitDomains
                }
            },
            getData(data) {
                const urlId = catcherOperators.getId();
                const selectedData = data
                    .filter(({ id }) => id === Number(urlId) || urlId === "all")
                console.log(selectedData)
                return selectedData;
            }
        }
    }
    const catcherOperators = catchers()
    catcherOperators.getPath()
    catcherOperators.getId()
    const data = () => {
        return new Promise((resolved, reject) => {

            const accessServerData = (data, outputTime) => {
                setTimeout(() => {
                    resolved(catcherOperators.getData(data));
                }, outputTime);
            };

            const rejectRequest = () => {
                reject("Os dados não foram encrontrados")
            };

            if (catcherOperators.getId()) {
                if (catcherOperators.getPath() === firstPath) {
                    const outputTime = 1000;
                    accessServerData(serverData().peopleServer, outputTime)
                }
                if (catcherOperators.getPath() === secondPath) {
                    const outputTime = 1000;
                    accessServerData(serverData().tvShows, outputTime)
                }
                else(
                    setTimeout(rejectRequest, 1000)
                )
            }
        })
    }
    return data()
}