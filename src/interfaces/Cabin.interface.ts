export default interface Cabin {
  posts?: {
    nodes: {
      id: string;
      hytte: {
        cabin: string;
        description: string;
        price: number;
        imgurl: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        };
      };
    }[];
  };
}
