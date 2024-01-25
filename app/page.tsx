import Image from "next/image";

import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export default async function Home() {
  const getBlogEntries = async () => {
    
  };
  return (

    <div>


    </div>

  );
}
