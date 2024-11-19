export interface Route {
    path: string;
    component: React.ElementType;  // Kiểu này có thể là function component hoặc class component, miễn là trả về JSX
  }