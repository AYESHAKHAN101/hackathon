import Breadcrumb from "@/components/singleProducts/asgharHeader";



export default function ProductPage() {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/shop" },
    { label: "Asgaard sofa" },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
    
    
      
     
    </div>
  );
}
