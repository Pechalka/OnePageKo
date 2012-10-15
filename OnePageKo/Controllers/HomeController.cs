using System.Collections.Generic;
using System.Web.Mvc;

namespace OnePageKo.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }


        public ActionResult CatalogData()
        {
            var items = new List<MenuItem>
                            {
                                new MenuItem{ hash = "#schoolyears", text = "school years"},
                                new MenuItem{ hash = "#letterstemplate", text = "letters template"},
                            };

            return Json(items, JsonRequestBehavior.AllowGet);
        }

        public ActionResult CatalogInterventionsData()
        {
            var items = new List<MenuItem>
                            {
                                new MenuItem{ hash = "#offensecodes", text = "Offense Codes"},
                                new MenuItem{ hash = "#elementaryprizes", text = "Elementary Prizes"},
                            };

            return Json(items, JsonRequestBehavior.AllowGet);
        }

        public ActionResult TaskData()
        {
            return Json("task page", JsonRequestBehavior.AllowGet);
        }

        public ActionResult StudentData(string q)
        {
            return Json("studen page q=" + q, JsonRequestBehavior.AllowGet);
        }


        public ActionResult SchoolYearsData()
        {
            return Json("schoolYearsData", JsonRequestBehavior.AllowGet);
        }


        public ActionResult OffenseCodesData()
        {
            return Json("OffenseCodesData", JsonRequestBehavior.AllowGet);
        }

        public ActionResult elementaryprizesData()
        {
            return Json("elementaryprizesData", JsonRequestBehavior.AllowGet);
        }

        public ActionResult LettersTemplateData()
        {
            return Json("lettersTemplatekData", JsonRequestBehavior.AllowGet);
        }

        public ActionResult CatalogLayoutData()
        {
            return Json("", JsonRequestBehavior.AllowGet);
        }

    }
}


public class MenuItem
{
    public string hash { get; set; }
    public string text { get; set; }
}