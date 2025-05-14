import { useEffect } from 'react';

const UseDfpSlot = ({ path, size, id }) => {
    
    useEffect(() => {
        const googletag = window.googletag || {};
        googletag.cmd = googletag.cmd || [];
        googletag.cmd.push(function() {
            googletag.defineSlot(path, size, id).addService(googletag.pubads());//error
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.enableServices();
        });
        googletag.cmd.push(function() {
            googletag.display(id);
        });
    }, [path, size, id]);
};

export default UseDfpSlot;