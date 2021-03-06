/**
 * Created by huang on 17-3-9.
 */


export class Constants {
    public static get ServerHost(): string { return 'http://localhost:8080'; };
    public static get ServerHost2(): string { return 'http://localhost:5000'; };
    //public static get ServerHost(): string { return 'http://192.168.1.18:3000';};
    public static get Restricts(): {} {
        return {
            'Integer' : ['平均值', '方差', '标准差'],
            'Double' : ['平均值', '方差', '标准差'],
            'String' : ['最大值', '最小值']};
    };

    public static get Urls(): {} {
        return {
            getPubToken: `${this.ServerHost}/file/getPubToken`,
            getPriToken: `${this.ServerHost}/file/getPriToken`,
            getKey: `${this.ServerHost}/file/getKey`,

            uploadCover: `${this.ServerHost}/dataset/uploadCover`,
            checkUpload: `${this.ServerHost}/dataset/checkUpload`,
            createDataset: `${this.ServerHost}/dataset/createDataset`,
            downloadUrl: `${this.ServerHost}/dataset/downloadUrl`,
            getMyDatasets: `${this.ServerHost}/dataset/getMyDatasets`,
            getAllDatasets: `${this.ServerHost}/dataset/getAllDatasets`,
            getDatasetDetail: `${this.ServerHost}/dataset/getDatasetDetail`,

            getAllPullRequests: `${this.ServerHost}/pullrequest/getDatasetPullRequest`,
            getPullRequestDetail: `${this.ServerHost}/pullrequest/getPullRequestDetail`,
            mergePullRequest: `${this.ServerHost}/pullrequest/confirmRequest`,
            rejectPullRequest: `${this.ServerHost}/pullrequest/rejectRequest`,

            // mooc
            addMooc: `${this.ServerHost}/course/add`,
            addStep: `${this.ServerHost}/course/addstep`,
            getMoocScreenHotCourse: `${this.ServerHost}/course/screen_hot_course`,
            getMoocBoutique: `${this.ServerHost}/course/boutique_course/more/`,
            getOtherCourse: `${this.ServerHost}/course/boutique_course/more/`,
            freshMoocBoutique: `${this.ServerHost}/course/fresh-boutique`,
            freshMoocOther: `${this.ServerHost}/course/fresh-other`,
            getDetailInit: `${this.ServerHost}/course/detail`,
            registerCourse: `${this.ServerHost}/course/register`,
            getMyCourse: `${this.ServerHost}/course/mycourses`,
            deleteMooc: `${this.ServerHost}/course/delete`,
            submitOverview: `${this.ServerHost}/course/editoverview`,
            confirmStepFile: `${this.ServerHost}/course/confirmsteppic`,
            editStepContent: `${this.ServerHost}/course/editstepcontent`,
            addQuestion: `${this.ServerHost}/course/addquestion`,
            addAnswer: `${this.ServerHost}/course/answer`,
            // competition
            getMyCompetition: `${this.ServerHost}/competition/getInfo`,
            getCompetitions: `${this.ServerHost}/competition/show_competitions`,
            addCompetition: `${this.ServerHost}/competition/add`,
            getHostCompetitions: `${this.ServerHost}/competition/get_competition`,
            deleteCompetition: `${this.ServerHost}/competition/delete`,
            getCompetitionDetail: `${this.ServerHost}/competition/detail`,
            confirmDataFile: `${this.ServerHost}/competition/confirmDataFile`,
            confirmDataAns: `${this.ServerHost}/competition/confirmAnsFile`,
            confirmUserDataAns: `${this.ServerHost}/competition/confirmUserAns`,
            judgeIfRegister: `${this.ServerHost}/competition/applyIf`,
            competitionRegister: `${this.ServerHost}/competition/register`,
            competitionQuit: `${this.ServerHost}/competition/unregister`,
            getPersonAccurate: `${this.ServerHost}/competition/person/accurate`,
            getAccurateRank: `${this.ServerHost}/competition//accurate/rank`,
            addComment: `${this.ServerHost}/competition/comment/add`,
            editDes: `${this.ServerHost}/competition/editdes`,
            editName: `${this.ServerHost}/competition/editname`,
            editStartTime: `${this.ServerHost}/competition/editstarttime`,
            editEndTime: `${this.ServerHost}/competition/editendtime`

        }
    }

}
