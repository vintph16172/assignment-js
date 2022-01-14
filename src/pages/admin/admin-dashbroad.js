import AdminHeader from "../../component/admin-header";

const AdminPage = {
    render(){
        return /*html*/`
            ${AdminHeader.render()}

            <div class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Dashboard
                </h1>
                </div>
            </div>
            <div class="min-h-full">
                

                
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <!-- Replace with your content -->
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                    <!-- /End replace -->
                </div>
            </div>
        
        `;

    }

    
}

export default AdminPage;