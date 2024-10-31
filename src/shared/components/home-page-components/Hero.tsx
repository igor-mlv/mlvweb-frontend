import React from 'react';
//import { getStrapiMedia } from '../../utils/api-helpers';

type HeroData = {
    __component: string;
    id: number;
    title: string;
};

type HeroProps = {
    data: HeroData;
};

export default function Hero({ data }: HeroProps) {
    //const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

    return (
        <section className="">
            {data.title}
        </section>
    );
}