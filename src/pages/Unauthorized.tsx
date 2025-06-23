
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";

const Unauthorized: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center mt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          You don't have permission to access this page. Please contact an
          administrator if you believe this is an error.
        </p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Unauthorized;
