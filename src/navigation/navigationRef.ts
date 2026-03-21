import {createNavigationContainerRef} from "@react-navigation/native";
import type {RootStackParamList, FieldStackParamList, TaskStackParamList, ProfileStackParamList} from "@/types/navigation";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<T extends keyof RootStackParamList>(name: T, params?: RootStackParamList[T]) {
  if (navigationRef.isReady()) {
    // 使用正确的类型调用navigate
    navigationRef.navigate(name as any, params);
  }
}

// 为嵌套导航添加类型安全的导航函数
export function navigateToField<T extends keyof FieldStackParamList>(name: T, params?: FieldStackParamList[T]) {
  if (navigationRef.isReady()) {
    // 使用never类型断言处理嵌套导航的类型
    (navigationRef.navigate as any)("Main", {
      screen: "FieldManagement",
      params: {
        screen: name,
        params,
      },
    });
  }
}

export function navigateToTask<T extends keyof TaskStackParamList>(name: T, params?: TaskStackParamList[T]) {
  if (navigationRef.isReady()) {
    // 使用never类型断言处理嵌套导航的类型
    (navigationRef.navigate as any)("Main", {
      screen: "TaskManagement",
      params: {
        screen: name,
        params,
      },
    });
  }
}

export function navigateToProfile<T extends keyof ProfileStackParamList>(name: T, params?: ProfileStackParamList[T]) {
  if (navigationRef.isReady()) {
    // 使用never类型断言处理嵌套导航的类型
    (navigationRef.navigate as any)("Main", {
      screen: "Profile",
      params: {
        screen: name,
        params,
      },
    });
  }
}
