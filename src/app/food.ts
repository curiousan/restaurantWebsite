export interface  Food {
    name: string;
    images: string;
    description: string;
    price: number;
    ingredient: string[];
    glutFree: boolean;
    lactFree: boolean;
    chillyLevel: number;
    serveType: string;
    extra: string;
    days: {
      sunday: boolean,
      monday: boolean,
      tuesday: boolean,
      wednesday: boolean,
      thursday: boolean,
      saturday: boolean
    };
}
