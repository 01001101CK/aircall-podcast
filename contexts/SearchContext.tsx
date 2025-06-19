"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Blog } from '../types/blog';
import { Podcast } from '../types/podcast';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  filteredBlogs: Blog[];
  filteredPodcasts: Podcast[];
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children, blogs, podcasts }: { 
  children: ReactNode; 
  blogs: Blog[];
  podcasts: Podcast[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Filter blogs based on search query and filter
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = searchQuery === '' || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = selectedFilter === 'All' || 
      blog.category.toLowerCase() === selectedFilter.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  // Filter podcasts based on search query
  const filteredPodcasts = podcasts.filter(podcast => {
    if (podcast.isComingSoon) return false; // Don't show coming soon in search results
    
    return searchQuery === '' || 
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (podcast.description && podcast.description.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const isSearching = searchQuery.length > 0;

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      selectedFilter,
      setSelectedFilter,
      filteredBlogs,
      filteredPodcasts,
      isSearching
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
} 