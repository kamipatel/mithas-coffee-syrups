import {
  Flower2,
  Leaf,
  TreePalm,
  Cookie,
  Flame,
  Gift,
  Coffee,
  GlassWater,
  MessageCircle,
  Sparkles,
  MapPin,
  Home,
  Tent,
  CupSoda,
  GraduationCap,
  Heart,
  Droplets,
} from "lucide-react";

export const iconMap = {
  flower2: Flower2,
  leaf: Leaf,
  "tree-palm": TreePalm,
  cookie: Cookie,
  flame: Flame,
  gift: Gift,
  coffee: Coffee,
  "glass-water": GlassWater,
  "message-circle": MessageCircle,
  sparkles: Sparkles,
  "map-pin": MapPin,
  home: Home,
  tent: Tent,
  "cup-soda": CupSoda,
  "graduation-cap": GraduationCap,
  heart: Heart,
  droplets: Droplets,
};

export function getIcon(name) {
  return iconMap[name] || Coffee;
}
