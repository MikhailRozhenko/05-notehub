import axios from 'axios';
import type { Note } from '../types/note';

interface CreateNotePayload {
  title: string;
  content: string;
  tag: string;
}

interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
// Получение заметки

export const fetchNotes = async (
  page: number,
  search: string,
): Promise<NotesResponse> => {
  const response = await axios.get<NotesResponse>('/notes', {
    params: {
      page: page,
      search: search,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};

// Создание заметки

export const createNote = async (newTask: CreateNotePayload) => {
  const response = await axios.post<Note>('/notes', newTask, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};

// Удаление заметки
export const deleteNote = async (id: string) => {
  const response = await axios.delete<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};
