interface User {
  id: number;
  username: string;
  avatar_url: string;
  avatar_cropped_big_url: string;
  position: string;
  email: string;
  phone_city: string;
  phone_city_ext: string;
  phone_mobile: string;
  avatar_original_url: string;
  registered: boolean;
  user_like_status: {
    name: string;
    number: string;
    range: string;
    range_human: string;
    description: string;
  };
  points_total: number;
  unit_name: string;
  grade_sheet_pdf_url: string;
  user_incoming_likes_count: number;
  user_week_incoming_likes_count: number;
  card_loyalty_exist: boolean;
  card_loyalty_barcode_data: null;
  user_unit: null;
  can_evacuation: boolean;
  game_character_id: null;
  unit_head: boolean;
  roles: [string];
  cinemas: [string];
  vacation_days: number;
}

interface RootState {
  isLoad: boolean;
  currentPost: any;
}
export {User, RootState};
