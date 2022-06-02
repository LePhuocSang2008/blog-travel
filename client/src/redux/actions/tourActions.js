import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
export const createTour = createAsyncThunk(
    "tour/createTour",
    async ({ updatedTourData, navigate, toast }, { rejectWithValue }) => {
      try {
        const response = await api.createTour(updatedTourData);
        toast.success("Blog Added Successfully");
        navigate("/");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const getTours = createAsyncThunk(
    "tour/getTours",
    async (page, { rejectWithValue }) => {
      try {
        const response = await api.getTours(page);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const getTour = createAsyncThunk(
    "tour/getTour",
    async (id, { rejectWithValue }) => {
      try {
        const response = await api.getTour(id);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const likeTour = createAsyncThunk(
    "tour/likeTour",
    async ({ _id }, { rejectWithValue }) => {
      try {
        const response = await api.likeTour(_id);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const getToursByUser = createAsyncThunk(
    "tour/getToursByUser",
    async (userId, { rejectWithValue }) => {
      try {
        const response = await api.getToursByUser(userId);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const deleteTour = createAsyncThunk(
    "tour/deleteTour",
    async ({ id, toast }, { rejectWithValue }) => {
      try {
        const response = await api.deleteTour(id);
        toast.success("Blog Deleted Successfully");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const updateTour = createAsyncThunk(
    "tour/updateTour",
    async ({ id, updatedTourData, toast, navigate }, { rejectWithValue }) => {
      try {
        const response = await api.updateTour(updatedTourData, id);
        toast.success("Blog Updated Successfully");
        navigate("/");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const searchTours = createAsyncThunk(
    "tour/searchTours",
    async (searchQuery, { rejectWithValue }) => {
      try {
        const response = await api.getToursBySearch(searchQuery);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const getToursByTag = createAsyncThunk(
    "tour/getToursByTag",
    async (tag, { rejectWithValue }) => {
      try {
        const response = await api.getTagTours(tag);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const getRelatedTours = createAsyncThunk(
    "tour/getRelatedTours",
    async (tags, { rejectWithValue }) => {
      try {
        const response = await api.getRelatedTours(tags);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );