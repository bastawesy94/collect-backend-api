export interface ISearchOptions {
  select?: string[]; // Fields to be selected in the query
  page?: number; // Current page for pagination
  limit?: number; // Limit for the number of records per page
  order?: {
    field: string; // The field to order by
    direction: "asc" | "desc"; // Sorting direction (ascending or descending)
  };
}
