import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

interface JobFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  keyword: string;
  location: string;
  category: string;
  salaryRange: [number, number];
}

const initialFilters: FilterState = {
  keyword: "",
  location: "",
  category: "",
  salaryRange: [0, 200000],
};

const categories = [
  "All Categories",
  "Web Development",
  "Design",
  "Marketing",
  "Data Science",
  "DevOps",
  "Management",
  "Sales",
  "Customer Support",
];

const JobFilters: React.FC<JobFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      category: value === "All Categories" ? "" : value,
    }));
  };

  const handleSalaryChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      salaryRange: [value[0], value[1]] as [number, number],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-4 md:p-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="keyword">Keyword</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="keyword"
                  name="keyword"
                  placeholder="Job title, skills, or company"
                  className="pl-10"
                  value={filters.keyword}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="City, state, or remote"
                value={filters.location}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex-1 space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={filters.category || "All Categories"}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="hidden md:block self-end">
              <Button type="submit" className="bg-job-primary hover:bg-job-secondary">
                Search
              </Button>
            </div>
          </div>

          <div className="md:hidden mt-4 flex gap-3">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1 gap-2"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter className="h-4 w-4" />
              {showMobileFilters ? "Hide Filters" : "More Filters"}
            </Button>
            <Button type="submit" className="flex-1 bg-job-primary hover:bg-job-secondary">
              Search
            </Button>
          </div>

          {showMobileFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Salary Range (AED)</Label>
                  <div className="flex justify-between mb-2 text-sm text-gray-500">
                    <span>AED{filters.salaryRange[0].toLocaleString()}</span>
                    <span>AED{filters.salaryRange[1].toLocaleString()}</span>
                  </div>
                  <Slider
                    defaultValue={[filters.salaryRange[0], filters.salaryRange[1]]}
                    min={0}
                    max={200000}
                    step={5000}
                    value={filters.salaryRange}
                    onValueChange={handleSalaryChange}
                    className="py-4"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="hidden md:block mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium mb-2">Salary Range (AED)</h3>
                <div className="flex justify-between mb-1 text-sm text-gray-500">
                  <span>AED{filters.salaryRange[0].toLocaleString()}</span>
                  <span>AED{filters.salaryRange[1].toLocaleString()}</span>
                </div>
                <div className="w-[300px]">
                  <Slider
                    defaultValue={[filters.salaryRange[0], filters.salaryRange[1]]}
                    min={0}
                    max={200000}
                    step={5000}
                    value={filters.salaryRange}
                    onValueChange={handleSalaryChange}
                    className="py-4"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={handleReset}>
                  Reset
                </Button>
                <Button type="submit" className="bg-job-primary hover:bg-job-secondary">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobFilters;
