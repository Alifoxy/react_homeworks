import './style/RunAppCss.css';
export const Launch = ({launch}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = launch;
    if (launch_year < 2020 || launch_year > 2020){
        return (
            <div className={'launch_block'}>
                <div>mission_name: {mission_name}</div>
                <div>launch_year: {launch_year}</div>
                <img src={mission_patch_small} alt={'mission_patch'}/>
            </div>
        );
    }
};

