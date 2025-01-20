import { error } from "@sveltejs/kit";
import data from "$lib/data";

export function load({ params }) {
    const slug = data["big-brain-content"].find(content => content.slug == params.slug);

    if (!slug) {
        error(404, {
            message: "Not Found"
        });
    }

    return slug;
}