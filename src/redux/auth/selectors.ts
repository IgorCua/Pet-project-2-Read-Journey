export const selectId = (state: any): string | null => state.auth._id;
export const selectName = (state: any): string | null => state.auth.name;
export const selectEmail = (state: any): string | null => state.auth.email;
export const selectToken = (state: any): string | null => state.auth.token;
export const selectRefreshToken = (state: any): string | null => state.auth.refreshToken;
export const selectAuthIsLoggedIn = (state: any): boolean => state.auth.isLoggedIn;
export const selectAuthIsError = (state: any): boolean => state.auth.isError;
export const selectAuthIsLoading = (state: any): boolean => state.auth.isLoading;
export const selectAuthError = (state: any): unknown => state.auth.error;
