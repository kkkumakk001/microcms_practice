import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: news } = await getNewsList({
        limit: 100,
        q: searchParams.q,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
        </>
    );
}
