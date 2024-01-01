import type { HouseFetch } from '$interface/house';

import { PUBLIC_BACKEND_URL } from "$env/static/public";

export const Utility = {
    yearArray(): number[] {
        const arr = Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, index) => 2000 + index);
        return arr
    },
    filterItems(term: string, data: any[]) {
        if (term) {
            return data.filter((f) => f.includes(term));
        }
        return data;
    }, async fetchData<T>(f = fetch, link: string): Promise<T> {
        link = PUBLIC_BACKEND_URL + link
        const res = await f(link);
        return await res.json();
    },
    async queryGaphql<T>(f = fetch, graphqlQuery: string): Promise<T> {





        const graphqlEndpoint = PUBLIC_BACKEND_URL + 'graphql';


        const headers = {
            'Content-Type': 'application/json',
        };


        const request = {
            method: 'POST',
            headers,
            body: JSON.stringify({ query: graphqlQuery }),
        };


        const res = await f(graphqlEndpoint, request)
        return await res.json();

    },
    formatDate(datetimeLocal: Date) {
        let t = new Date(datetimeLocal)

        const day = this.padTo2Digits(t.getDate()),
            month = t.getMonth(),
            year = t.getFullYear(),
            hour = this.padTo2Digits(t.getHours()),
            minute = this.padTo2Digits(t.getMinutes())

        const m = this.monthNames[+month] as string


        return `${day} ${m} ${year} ${hour}:${minute}`;
    },
    padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
    },
    monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    async UploadPhotos(photos: File[]) {
        if (!photos.length) {

            return { status: 201, keys: [], message: "Empty" }
        }
        let s3url = PUBLIC_BACKEND_URL + "aws/get-signature?no_img=" + photos.length
        const x = await fetch(s3url)
        if (x.ok) {
            console.log("object");
            const urls: { urls: string[] } = await x.json()
            photos.forEach(async (photo, index) => {
                await fetch(urls.urls[index], {
                    method: "PUT",
                    body: photo
                })
            })
            return { status: 201, keys: urls.urls.map(x => x.split('?').at(0)), message: "success" }
        }
        return { status: 500, message: "S3Bucket Error", keys: [] }






    },
    async DeletePhotos(items: string[]) {
        const res = await fetch(PUBLIC_BACKEND_URL + "api/aws/delete", {
            method: 'POST',
            body: JSON.stringify({ items }),
            headers: {
                'content-type': 'application/json'
            }
        })



        return await res.json()




    },
    splitParagraph(content: string) {

        const maxCharsPerParagraph = 300; // Adjust as needed

        // Split the content into paragraphs based on the character count
        const paragraphs: string[] = [];
        let currentParagraph = '';
        const sentences = content.split('. ');

        for (let sentence of sentences) {
            if ((currentParagraph + ' ' + sentence).length <= maxCharsPerParagraph) {
                currentParagraph += (currentParagraph ? ' ' : '') + sentence;
            } else {
                paragraphs.push(currentParagraph);
                currentParagraph = sentence;
            }
        }

        // Push the last paragraph if it's not empty
        if (currentParagraph) {
            paragraphs.push(currentParagraph);
        }
        return paragraphs
    }
    ,
    addProps(house: HouseFetch) {
        const {
            nearest_town: town,
            land_size: size,
            year_built: year,
            type: { name }
        } = house.property;
        return [{ year }, { town }, { size }, { type: name }];
    }

};
