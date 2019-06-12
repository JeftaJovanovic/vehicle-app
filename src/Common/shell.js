import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { HomePage } from '../HomePage/Pages/HomePage';
import { NotFoundPage } from '../Common/NotFoundPage';
import VehicleModelList from '../VehicleModel/Pages/VehicleModelList';
import VehicleModelCreateView from '../VehicleModel/Pages/VehicleModelCreateView';
import VehicleModelEditView from '../VehicleModel/Pages/VehicleModelEditView';

const viewMap = {
    vehicleModelList: <VehicleModelList />,
    home: <HomePage />,
    notFound: <NotFoundPage />,
    createVehicle: <VehicleModelCreateView />,
    editVehicle: <VehicleModelEditView />
};

export const Shell = inject('rootStore')(
    class extends React.Component {
        render() {
            const { rootStore } = this.props;
            const { routerStore } = rootStore;

            return <RouterView routerStore={routerStore} viewMap={viewMap} />;
        }
    }
);
