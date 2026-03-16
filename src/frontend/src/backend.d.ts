import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface PartialProduct {
    stockQuantity: bigint;
    name: string;
    isNewArrival: boolean;
    description: string;
    imageUrl: string;
    offerDetails?: string;
    category: Category;
    isOnOffer: boolean;
    price: bigint;
}
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface UserProfile {
    name: string;
}
export interface Product {
    id: bigint;
    stockQuantity: bigint;
    name: string;
    isNewArrival: boolean;
    description: string;
    imageUrl: string;
    offerDetails?: string;
    category: Category;
    isOnOffer: boolean;
    price: bigint;
}
export enum Category {
    handbag = "handbag",
    jewelry = "jewelry",
    saree = "saree"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addProduct(product: PartialProduct): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createReplicatePrediction(humanImageBase64: string, garmentImageUrl: string, garmentDescription: string): Promise<string>;
    deleteProduct(id: bigint): Promise<void>;
    getAllProducts(): Promise<Array<Product>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getNewArrivals(): Promise<Array<Product>>;
    getOnOfferProducts(): Promise<Array<Product>>;
    getProduct(id: bigint): Promise<Product>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    pollReplicatePrediction(predictionId: string): Promise<string>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    searchProducts(searchTerm: string): Promise<Array<Product>>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    updateProduct(id: bigint, updatedProduct: PartialProduct): Promise<void>;
}
