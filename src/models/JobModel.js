const JOBS_KEY = "jobs";


export const JobModel = {
list(storage){ return storage.load(JOBS_KEY) || []; },
saveAll(storage, jobs){ storage.save(JOBS_KEY, jobs); },
};