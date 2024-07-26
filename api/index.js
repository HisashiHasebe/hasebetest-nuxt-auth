import { ofetch } from 'ofetch';

export const getDynamicUserRoutes = async () => {
    const response = await ofetch('https://hasebetest-front-nuxt-auth20220913-2.g.kuroco-front.app/rcms-api/1/member/list');
    return response.list.flatMap((user) => [`/member/detail/${user.member_id}`, `/ja/member/detail/${user.member_id}`]);
};

export const getDynamicContentRoutes = async () => {
    const response = await ofetch('https://hasebetest-front-nuxt-auth20220913-2.g.kuroco-front.app/rcms-api/1/content/list');
    return response.list.flatMap((user) => [`/topics_detail/${user.topics_id}`, `/ja/topics_detail/${user.topics_id}`]);
};