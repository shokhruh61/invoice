import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useInvoiceStore = create(
    persist(
        (set, get) => ({
            items: [],

            // Item qo'shish
            addItem: (item) => set((state) => ({ items: [...state.items, item] })),

            // Itemni o'zgartirish
            updateItem: (id, updatedData) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id ? { ...item, ...updatedData } : item
                    ),
                })),

            // Itemni o'chirish
            deleteItem: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),

            // Barcha itemlarni o'chirish
            clearItems: () => set({ items: [] }),
        }),
        {
            name: 'invoice-storage', // localStorage kaliti
        }
    )
)

export default useInvoiceStore
