function mapList(id){
  const course = new Map([
    ["ARCTIC", "https://www.washington.edu/students/timeschd/SPR2023/arctic.html"],
    ["HONORS", "https://www.washington.edu/students/timeschd/SPR2023/hnrs.html"],
    ["LEAD", "https://www.washington.edu/students/timeschd/SPR2023/lead.html"],
    ["ACADEM", "https://www.washington.edu/students/timeschd/SPR2023/academ.html"],
    ["AFRAM", "https://www.washington.edu/students/timeschd/SPR2023/afamst.html"],
    ["AES", "https://www.washington.edu/students/timeschd/SPR2023/aes.html"],
    ["AAS", "https://www.washington.edu/students/timeschd/SPR2023/asamst.html"],
    ["CHSTU", "https://www.washington.edu/students/timeschd/SPR2023/chist.html"],
    ["SWA", "https://www.washington.edu/students/timeschd/SPR2023/swa.html"],
    ["TAGLG", "https://www.washington.edu/students/timeschd/SPR2023/taglg.html"],
    ["AIS", "https://www.washington.edu/students/timeschd/SPR2023/ais.html"],
    ["ANTH", "https://www.washington.edu/students/timeschd/SPR2023/anthro.html"],
    ["ARCHY", "https://www.washington.edu/students/timeschd/SPR2023/archeo.html"],
    ["BIO A", "https://www.washington.edu/students/timeschd/SPR2023/bioanth.html"],
    ["AMATH", "https://www.washington.edu/students/timeschd/SPR2023/appmath.html"],
    ["CFRM", "https://www.washington.edu/students/timeschd/SPR2023/cfrm.html"],
    ["ART", "https://www.washington.edu/students/timeschd/SPR2023/art.html"],
    ["ART H", "https://www.washington.edu/students/timeschd/SPR2023/arthis.html"],
    ["DESIGN", "https://www.washington.edu/students/timeschd/SPR2023/design.html"],
    ["ARTSCI", "https://www.washington.edu/students/timeschd/SPR2023/artsci.html"],
    ["ARTS", "https://www.washington.edu/students/timeschd/SPR2023/arts.html"],
    ["ASIAN", "https://www.washington.edu/students/timeschd/SPR2023/asianll.html"],
    ["BENG", "https://www.washington.edu/students/timeschd/SPR2023/beng.html"],
    ["CHIN", "https://www.washington.edu/students/timeschd/SPR2023/chinese.html"],
    ["HINDI", "https://www.washington.edu/students/timeschd/SPR2023/hindi.html"],
    ["INDN", "https://www.washington.edu/students/timeschd/SPR2023/indian.html"],
    ["INDO", "https://www.washington.edu/students/timeschd/SPR2023/indo.html"],
    ["JAPAN", "https://www.washington.edu/students/timeschd/SPR2023/japanese.html"],
    ["KOREAN", "https://www.washington.edu/students/timeschd/SPR2023/korean.html"],
    ["SNKRT", "https://www.washington.edu/students/timeschd/SPR2023/sanskrit.html"],
    ["S ASIA", "https://www.washington.edu/students/timeschd/SPR2023/sasian.html"],
    ["URDU", "https://www.washington.edu/students/timeschd/SPR2023/urdu.html"],
    ["VIET", "https://www.washington.edu/students/timeschd/SPR2023/viet.html"],
    ["ASTR", "https://www.washington.edu/students/timeschd/SPR2023/astro.html"],
    ["ASTBIO", "https://www.washington.edu/students/timeschd/SPR2023/astbio.html"],
    ["BIOL", "https://www.washington.edu/students/timeschd/SPR2023/biology.html"],
    ["BIOL", "https://www.washington.edu/students/timeschd/SPR2023/biology.html"],
    ["CS&SS", "https://www.washington.edu/students/timeschd/SPR2023/cs&ss.html"],
    ["CSDE", "https://www.washington.edu/students/timeschd/SPR2023/csde.html"],
    ["HUM", "https://www.washington.edu/students/timeschd/SPR2023/centhum.html"],
    ["CHEM", "https://www.washington.edu/students/timeschd/SPR2023/chem.html"],
    ["CMS", "https://www.washington.edu/students/timeschd/SPR2023/cms.html"],
    ["C LIT", "https://www.washington.edu/students/timeschd/SPR2023/complit.html"],
    ["CL AR", "https://www.washington.edu/students/timeschd/SPR2023/clarch.html"],
    ["CL LI", "https://www.washington.edu/students/timeschd/SPR2023/cling.html"],
    ["CLAS", "https://www.washington.edu/students/timeschd/SPR2023/clas.html"],
    ["GREEK", "https://www.washington.edu/students/timeschd/SPR2023/greek.html"],
    ["LATIN", "https://www.washington.edu/students/timeschd/SPR2023/latin.html"],
    ["COM", "https://www.washington.edu/students/timeschd/SPR2023/com.html"],
    ["COMMLD", "https://www.washington.edu/students/timeschd/SPR2023/commld.html"],
    ["CHID", "https://www.washington.edu/students/timeschd/SPR2023/chid.html"],
    ["RELIG", "https://www.washington.edu/students/timeschd/SPR2023/religion.html"],
    ["CSE", "https://www.washington.edu/students/timeschd/SPR2023/cse.html"],
    ["DANCE", "https://www.washington.edu/students/timeschd/SPR2023/dance.html"],
    ["DXARTS", "https://www.washington.edu/students/timeschd/SPR2023/dxarts.html"],
    ["DIS ST", "https://www.washington.edu/students/timeschd/SPR2023/disst.html"],
    ["DRAMA", "https://www.washington.edu/students/timeschd/SPR2023/drama.html"],
    ["ECON", "https://www.washington.edu/students/timeschd/SPR2023/econ.html"],
    ["ENGL", "https://www.washington.edu/students/timeschd/SPR2023/engl.html"],
    ["FRENCH", "https://www.washington.edu/students/timeschd/SPR2023/french.html"],
    ["ITAL", "https://www.washington.edu/students/timeschd/SPR2023/italian.html"],
    ["TXTDS", "https://www.washington.edu/students/timeschd/SPR2023/txtds.html"],
    ["GWSS", "https://www.washington.edu/students/timeschd/SPR2023/gwss.html"],
    ["GEN ST", "https://www.washington.edu/students/timeschd/SPR2023/genst.html"],
    ["GIS", "https://www.washington.edu/students/timeschd/SPR2023/gis.html"],
    ["INDIV", "https://www.washington.edu/students/timeschd/SPR2023/indiv.html"],
    ["GEOG", "https://www.washington.edu/students/timeschd/SPR2023/geog.html"],
    ["GERMAN", "https://www.washington.edu/students/timeschd/SPR2023/germ.html"],
    ["JSIS E", "https://www.washington.edu/students/timeschd/SPR2023/jsise.html"],
    ["HSTAM", "https://www.washington.edu/students/timeschd/SPR2023/ancmedh.html"],
    ["HSTCMP", "https://www.washington.edu/students/timeschd/SPR2023/hstcmp.html"],
    ["HSTAFM", "https://www.washington.edu/students/timeschd/SPR2023/hstafm.html"],
    ["HSTAS", "https://www.washington.edu/students/timeschd/SPR2023/histasia.html"],
    ["HSTLAC", "https://www.washington.edu/students/timeschd/SPR2023/hstlac.html"],
    ["HSTEU", "https://www.washington.edu/students/timeschd/SPR2023/modeuro.html"],
    ["HSTAA", "https://www.washington.edu/students/timeschd/SPR2023/histam.html"],
    ["HSTRY", "https://www.washington.edu/students/timeschd/SPR2023/hstry.html"],
    ["HUM", "https://www.washington.edu/students/timeschd/SPR2023/centhum.html"],
    ["INTSCI", "https://www.washington.edu/students/timeschd/SPR2023/intsci.html"],
    ["RELIG", "https://www.washington.edu/students/timeschd/SPR2023/religion.html"],
    ["JSIS", "https://www.washington.edu/students/timeschd/SPR2023/jsis.html"],
    ["JSIS A", "https://www.washington.edu/students/timeschd/SPR2023/jsisa.html"],
    ["JSIS B", "https://www.washington.edu/students/timeschd/SPR2023/jsisb.html"],
    ["JSIS C", "https://www.washington.edu/students/timeschd/SPR2023/jsisc.html"],
    ["JSIS D", "https://www.washington.edu/students/timeschd/SPR2023/jsisd.html"],
    ["JSIS E", "https://www.washington.edu/students/timeschd/SPR2023/jsise.html"],
    ["JEW ST", "https://www.washington.edu/students/timeschd/SPR2023/jewst.html"],
    ["LABOR", "https://www.washington.edu/students/timeschd/SPR2023/labor.html"],
    ["LSJ", "https://www.washington.edu/students/timeschd/SPR2023/lsj.html"],
    ["ASL", "https://www.washington.edu/students/timeschd/SPR2023/asl.html"],
    ["LING", "https://www.washington.edu/students/timeschd/SPR2023/ling.html"],
    ["LIT", "https://www.washington.edu/students/timeschd/SPR2023/lit.html"],
    ["MATH", "https://www.washington.edu/students/timeschd/SPR2023/math.html"],
    ["ARAB", "https://www.washington.edu/students/timeschd/SPR2023/arabic.html"],
    ["ARAMIC", "https://www.washington.edu/students/timeschd/SPR2023/aramic.html"],
    ["COPTIC", "https://www.washington.edu/students/timeschd/SPR2023/coptic.html"],
    ["EGYPT", "https://www.washington.edu/students/timeschd/SPR2023/egypt.html"],
    ["GEEZ", "https://www.washington.edu/students/timeschd/SPR2023/geez.html"],
    ["HEBR", "https://www.washington.edu/students/timeschd/SPR2023/hebrew.html"],
    ["BIBHEB", "https://www.washington.edu/students/timeschd/SPR2023/bibheb.html"],
    ["MODHEB", "https://www.washington.edu/students/timeschd/SPR2023/modheb.html"],
    ["NEAR E", "https://www.washington.edu/students/timeschd/SPR2023/neareast.html"],
    ["PRSAN", "https://www.washington.edu/students/timeschd/SPR2023/persian.html"],
    ["TURKIC", "https://www.washington.edu/students/timeschd/SPR2023/turkc.html"],
    ["CHGTAI", "https://www.washington.edu/students/timeschd/SPR2023/chgtai.html"],
    ["KAZAKH", "https://www.washington.edu/students/timeschd/SPR2023/kazakh.html"],
    ["KYRGYZ", "https://www.washington.edu/students/timeschd/SPR2023/kyrgyz.html"],
    ["UYGUR", "https://www.washington.edu/students/timeschd/SPR2023/uygur.html"],
    ["UZBEK", "https://www.washington.edu/students/timeschd/SPR2023/uzbek.html"],
    ["TKISH", "https://www.washington.edu/students/timeschd/SPR2023/turkish.html"],
    ["UGARIT", "https://www.washington.edu/students/timeschd/SPR2023/ugarit.html"],
    ["MUSIC", "https://www.washington.edu/students/timeschd/SPR2023/music.html"],
    ["MUSAP", "https://www.washington.edu/students/timeschd/SPR2023/appmus.html"],
    ["MUSED", "https://www.washington.edu/students/timeschd/SPR2023/mused.html"],
    ["MUSEN", "https://www.washington.edu/students/timeschd/SPR2023/musensem.html"],
    ["MUHST", "https://www.washington.edu/students/timeschd/SPR2023/mushist.html"],
    ["MUSICP", "https://www.washington.edu/students/timeschd/SPR2023/musicp.html"],
    ["NBIO", "https://www.washington.edu/students/timeschd/SPR2023/nbio.html"],
    ["NEUSCI", "https://www.washington.edu/students/timeschd/SPR2023/neusci.html"],
    ["ETHICS", "https://www.washington.edu/students/timeschd/SPR2023/ethics.html"],
    ["HPS", "https://www.washington.edu/students/timeschd/SPR2023/hps.html"],
    ["PHIL", "https://www.washington.edu/students/timeschd/SPR2023/phil.html"],
    ["PHYS", "https://www.washington.edu/students/timeschd/SPR2023/phys.html"],
    ["POL S", "https://www.washington.edu/students/timeschd/SPR2023/polisci.html"],
    ["PSYCAP", "https://www.washington.edu/students/timeschd/SPR2023/95psycap.html"],
    ["PSYCLN", "https://www.washington.edu/students/timeschd/SPR2023/psycln.html"],
    ["PSYCH", "https://www.washington.edu/students/timeschd/SPR2023/psych.html"],
    ["DANISH", "https://www.washington.edu/students/timeschd/SPR2023/danish.html"],
    ["ESTO", "https://www.washington.edu/students/timeschd/SPR2023/eston.html"],
    ["FINN", "https://www.washington.edu/students/timeschd/SPR2023/finnish.html"],
    ["ICEL", "https://www.washington.edu/students/timeschd/SPR2023/icel.html"],
    ["LATV", "https://www.washington.edu/students/timeschd/SPR2023/latvian.html"],
    ["LITH", "https://www.washington.edu/students/timeschd/SPR2023/lith.html"],
    ["NORW", "https://www.washington.edu/students/timeschd/SPR2023/norweg.html"],
    ["SCAND", "https://www.washington.edu/students/timeschd/SPR2023/scand.html"],
    ["SWED", "https://www.washington.edu/students/timeschd/SPR2023/swedish.html"],
    ["BCMS", "https://www.washington.edu/students/timeschd/SPR2023/bcms.html"],
    ["BULGR", "https://www.washington.edu/students/timeschd/SPR2023/bulgar.html"],
    ["CZECH", "https://www.washington.edu/students/timeschd/SPR2023/czech.html"],
    ["GEORG", "https://www.washington.edu/students/timeschd/SPR2023/georg.html"],
    ["GLITS", "https://www.washington.edu/students/timeschd/SPR2023/glits.html"],
    ["POLSH", "https://www.washington.edu/students/timeschd/SPR2023/polish.html"],
    ["ROMN", "https://www.washington.edu/students/timeschd/SPR2023/romanian.html"],
    ["RUSS", "https://www.washington.edu/students/timeschd/SPR2023/russian.html"],
    ["SLAVIC", "https://www.washington.edu/students/timeschd/SPR2023/slavic.html"],
    ["SLVN", "https://www.washington.edu/students/timeschd/SPR2023/slvn.html"],
    ["UKR", "https://www.washington.edu/students/timeschd/SPR2023/ukrain.html"],
    ["SOCSCI", "https://www.washington.edu/students/timeschd/SPR2023/socsci.html"],
    ["SOC", "https://www.washington.edu/students/timeschd/SPR2023/soc.html"],
    ["PORT", "https://www.washington.edu/students/timeschd/SPR2023/port.html"],
    ["SPAN", "https://www.washington.edu/students/timeschd/SPR2023/spanish.html"],
    ["SPLING", "https://www.washington.edu/students/timeschd/SPR2023/spanlin.html"],
    ["SPHSC", "https://www.washington.edu/students/timeschd/SPR2023/sphsc.html"],
    ["STAT", "https://www.washington.edu/students/timeschd/SPR2023/stat.html"],
    ["BIOL", "https://www.washington.edu/students/timeschd/SPR2023/biology.html"],
    ["ARCH", "https://www.washington.edu/students/timeschd/SPR2023/archit.html"],
    ["B E", "https://www.washington.edu/students/timeschd/SPR2023/be.html"],
    ["CM", "https://www.washington.edu/students/timeschd/SPR2023/constmgmt.html"],
    ["L ARCH", "https://www.washington.edu/students/timeschd/SPR2023/landscape.html"],
    ["R E", "https://www.washington.edu/students/timeschd/SPR2023/re.html"],
    ["CEP", "https://www.washington.edu/students/timeschd/SPR2023/commenv.html"],
    ["IPM", "https://www.washington.edu/students/timeschd/SPR2023/ipm.html"],
    ["URBDP", "https://www.washington.edu/students/timeschd/SPR2023/urbdes.html"],
    ["ACCTG", "https://www.washington.edu/students/timeschd/SPR2023/acctg.html"],
    ["ADMIN", "https://www.washington.edu/students/timeschd/SPR2023/admin.html"],
    ["B A", "https://www.washington.edu/students/timeschd/SPR2023/ba.html"],
    ["BA RM", "https://www.washington.edu/students/timeschd/SPR2023/barm.html"],
    ["BUS AN", "https://www.washington.edu/students/timeschd/SPR2023/busan.html"],
    ["B CMU", "https://www.washington.edu/students/timeschd/SPR2023/buscomm.html"],
    ["B ECON", "https://www.washington.edu/students/timeschd/SPR2023/busecon.html"],
    ["B POL", "https://www.washington.edu/students/timeschd/SPR2023/bpol.html"],
    ["EBIZ", "https://www.washington.edu/students/timeschd/SPR2023/ebiz.html"],
    ["ENTRE", "https://www.washington.edu/students/timeschd/SPR2023/entre.html"],
    ["FIN", "https://www.washington.edu/students/timeschd/SPR2023/finance.html"],
    ["HRMOB", "https://www.washington.edu/students/timeschd/SPR2023/hrmob.html"],
    ["I S", "https://www.washington.edu/students/timeschd/SPR2023/infosys.html"],
    ["MSIS", "https://www.washington.edu/students/timeschd/SPR2023/msis.html"],
    ["I BUS", "https://www.washington.edu/students/timeschd/SPR2023/intlbus.html"],
    ["MGMT", "https://www.washington.edu/students/timeschd/SPR2023/mgmt.html"],
    ["MKTG", "https://www.washington.edu/students/timeschd/SPR2023/mktg.html"],
    ["OPMGT", "https://www.washington.edu/students/timeschd/SPR2023/opmgmt.html"],
    ["O E", "https://www.washington.edu/students/timeschd/SPR2023/orgenv.html"],
    ["QMETH", "https://www.washington.edu/students/timeschd/SPR2023/qmeth.html"],
    ["ST MGT", "https://www.washington.edu/students/timeschd/SPR2023/stratm.html"],
    ["SCM", "https://www.washington.edu/students/timeschd/SPR2023/scm.html"],
    ["DENTCL", "https://www.washington.edu/students/timeschd/SPR2023/dentcl.html"],
    ["DENTEL", "https://www.washington.edu/students/timeschd/SPR2023/dentel.html"],
    ["DENTFN", "https://www.washington.edu/students/timeschd/SPR2023/dentfn.html"],
    ["DENTGP", "https://www.washington.edu/students/timeschd/SPR2023/dentgp.html"],
    ["D HYG", "https://www.washington.edu/students/timeschd/SPR2023/denthy.html"],
    ["DENTPC", "https://www.washington.edu/students/timeschd/SPR2023/dentpc.html"],
    ["DENTSL", "https://www.washington.edu/students/timeschd/SPR2023/dentsl.html"],
    ["DPHS", "https://www.washington.edu/students/timeschd/SPR2023/dphs.html"],
    ["DENT", "https://www.washington.edu/students/timeschd/SPR2023/dent.html"],
    ["ENDO", "https://www.washington.edu/students/timeschd/SPR2023/endo.html"],
    ["ORALB", "https://www.washington.edu/students/timeschd/SPR2023/oralbio.html"],
    ["OHS", "https://www.washington.edu/students/timeschd/SPR2023/ohs.html"],
    ["ORALM", "https://www.washington.edu/students/timeschd/SPR2023/oralm.html"],
    ["O S", "https://www.washington.edu/students/timeschd/SPR2023/os.html"],
    ["ORTHO", "https://www.washington.edu/students/timeschd/SPR2023/orthod.html"],
    ["PEDO", "https://www.washington.edu/students/timeschd/SPR2023/pedodon.html"],
    ["PERIO", "https://www.washington.edu/students/timeschd/SPR2023/perio.html"],
    ["PROS", "https://www.washington.edu/students/timeschd/SPR2023/pros.html"],
    ["RES D", "https://www.washington.edu/students/timeschd/SPR2023/restor.html"],
    ["EDC&I", "https://www.washington.edu/students/timeschd/SPR2023/edci.html"],
    ["EDUC", "https://www.washington.edu/students/timeschd/SPR2023/indsrf.html"],
    ["ECE", "https://www.washington.edu/students/timeschd/SPR2023/ece.html"],
    ["ECFS", "https://www.washington.edu/students/timeschd/SPR2023/ecfs.html"],
    ["EDTEP", "https://www.washington.edu/students/timeschd/SPR2023/teached.html"],
    ["EDLPS", "https://www.washington.edu/students/timeschd/SPR2023/edlp.html"],
    ["EDPSY", "https://www.washington.edu/students/timeschd/SPR2023/edpsy.html"],
    ["EDSPE", "https://www.washington.edu/students/timeschd/SPR2023/sped.html"],
    ["A A", "https://www.washington.edu/students/timeschd/SPR2023/aa.html"],
    ["A E", "https://www.washington.edu/students/timeschd/SPR2023/ae.html"],
    ["CHEM E", "https://www.washington.edu/students/timeschd/SPR2023/cheng.html"],
    ["NME", "https://www.washington.edu/students/timeschd/SPR2023/nme.html"],
    ["CEE", "https://www.washington.edu/students/timeschd/SPR2023/cee.html"],
    ["CESI", "https://www.washington.edu/students/timeschd/SPR2023/cesi.html"],
    ["CEWA", "https://www.washington.edu/students/timeschd/SPR2023/cewa.html"],
    ["CESG", "https://www.washington.edu/students/timeschd/SPR2023/cesg.html"],
    ["CET", "https://www.washington.edu/students/timeschd/SPR2023/cet.html"],
    ["CSE", "https://www.washington.edu/students/timeschd/SPR2023/cse.html"],
    ["CSE D", "https://www.washington.edu/students/timeschd/SPR2023/csed.html"],
    ["E E", "https://www.washington.edu/students/timeschd/SPR2023/ee.html"],
    ["ENGR", "https://www.washington.edu/students/timeschd/SPR2023/engr.html"],
    ["HCDE", "https://www.washington.edu/students/timeschd/SPR2023/hcde.html"],
    ["IND E", "https://www.washington.edu/students/timeschd/SPR2023/inde.html"],
    ["MS E", "https://www.washington.edu/students/timeschd/SPR2023/mse.html"],
    ["M E", "https://www.washington.edu/students/timeschd/SPR2023/meche.html"],
    ["MEIE", "https://www.washington.edu/students/timeschd/SPR2023/meie.html"],
    ["FISH", "https://www.washington.edu/students/timeschd/SPR2023/fish.html"],
    ["ATM S", "https://www.washington.edu/students/timeschd/SPR2023/atmos.html"],
    ["C ENV", "https://www.washington.edu/students/timeschd/SPR2023/cenv.html"],
    ["SCI T", "https://www.washington.edu/students/timeschd/SPR2023/scit.html"],
    ["ESS", "https://www.washington.edu/students/timeschd/SPR2023/ess.html"],
    ["ENVIR", "https://www.washington.edu/students/timeschd/SPR2023/envst.html"],
    ["BSE", "https://www.washington.edu/students/timeschd/SPR2023/bse.html"],
    ["ESRM", "https://www.washington.edu/students/timeschd/SPR2023/esrm.html"],
    ["SEFS", "https://www.washington.edu/students/timeschd/SPR2023/sefs.html"],
    ["FHL", "https://www.washington.edu/students/timeschd/SPR2023/fhl.html"],
    ["SMEA", "https://www.washington.edu/students/timeschd/SPR2023/smea.html"],
    ["MARBIO", "https://www.washington.edu/students/timeschd/SPR2023/marbio.html"],
    ["OCEAN", "https://www.washington.edu/students/timeschd/SPR2023/ocean.html"],
    ["Q SCI", "https://www.washington.edu/students/timeschd/SPR2023/quantsci.html"],
    ["QERM", "https://www.washington.edu/students/timeschd/SPR2023/quante.html"],
    ["QUAT", "https://www.washington.edu/students/timeschd/SPR2023/qrc.html"],
    ["INFO", "https://www.washington.edu/students/timeschd/SPR2023/info.html"],
    ["INSC", "https://www.washington.edu/students/timeschd/SPR2023/insc.html"],
    ["IMT", "https://www.washington.edu/students/timeschd/SPR2023/imt.html"],
    ["LIS", "https://www.washington.edu/students/timeschd/SPR2023/lis.html"],
    ["BPSD", "https://www.washington.edu/students/timeschd/SPR2023/bpsd.html"],
    ["DATA", "https://www.washington.edu/students/timeschd/SPR2023/data.html"],
    ["GRDSCH", "https://www.washington.edu/students/timeschd/SPR2023/grad.html"],
    ["HCID", "https://www.washington.edu/students/timeschd/SPR2023/hcid.html"],
    ["HDD", "https://www.washington.edu/students/timeschd/SPR2023/hdd.html"],
    ["IPHD", "https://www.washington.edu/students/timeschd/SPR2023/iphd.html"],
    ["MCB", "https://www.washington.edu/students/timeschd/SPR2023/mcb.html"],
    ["MOLENG", "https://www.washington.edu/students/timeschd/SPR2023/moleng.html"],
    ["MUSEUM", "https://www.washington.edu/students/timeschd/SPR2023/museo.html"],
    ["N&MES", "https://www.washington.edu/students/timeschd/SPR2023/nearmide.html"],
    ["NEURO", "https://www.washington.edu/students/timeschd/SPR2023/neuro.html"],
    ["PUBSCH", "https://www.washington.edu/students/timeschd/SPR2023/pubsch.html"],
    ["STSS", "https://www.washington.edu/students/timeschd/SPR2023/stss.html"],
    ["TECHIN", "https://www.washington.edu/students/timeschd/SPR2023/techin.html"],
    ["BIOEN", "https://www.washington.edu/students/timeschd/SPR2023/bioeng.html"],
    ["MEDENG", "https://www.washington.edu/students/timeschd/SPR2023/medeng.html"],
    ["PHARBE", "https://www.washington.edu/students/timeschd/SPR2023/pharbe.html"],
    ["G H", "https://www.washington.edu/students/timeschd/SPR2023/gh.html"],
    ["UCONJ", "https://www.washington.edu/students/timeschd/SPR2023/uconjoint.html"],
    ["LAW", "https://www.washington.edu/students/timeschd/SPR2023/law.html"],
    ["LAW A", "https://www.washington.edu/students/timeschd/SPR2023/lawa.html"],
    ["LAW B", "https://www.washington.edu/students/timeschd/SPR2023/lawb.html"],
    ["LAW C", "https://www.washington.edu/students/timeschd/SPR2023/lawc.html"],
    ["LAW E", "https://www.washington.edu/students/timeschd/SPR2023/lawe.html"],
    ["LAW H", "https://www.washington.edu/students/timeschd/SPR2023/lawh.html"],
    ["LAW P", "https://www.washington.edu/students/timeschd/SPR2023/lawp.html"],
    ["LAW T", "https://www.washington.edu/students/timeschd/SPR2023/lawt.html"],
    ["ANEST", "https://www.washington.edu/students/timeschd/SPR2023/anest.html"],
    ["BIOC", "https://www.washington.edu/students/timeschd/SPR2023/bioch.html"],
    ["B H", "https://www.washington.edu/students/timeschd/SPR2023/bh.html"],
    ["B STR", "https://www.washington.edu/students/timeschd/SPR2023/biostruct.html"],
    ["BIME", "https://www.washington.edu/students/timeschd/SPR2023/bime.html"],
    ["C MED", "https://www.washington.edu/students/timeschd/SPR2023/compmed.html"],
    ["CONJ", "https://www.washington.edu/students/timeschd/SPR2023/conj.html"],
    ["FAMED", "https://www.washington.edu/students/timeschd/SPR2023/famed.html"],
    ["MEDLIC", "https://www.washington.edu/students/timeschd/SPR2023/medlic.html"],
    ["GENOME", "https://www.washington.edu/students/timeschd/SPR2023/genome.html"],
    ["HMS", "https://www.washington.edu/students/timeschd/SPR2023/hms.html"],
    ["HUBIO", "https://www.washington.edu/students/timeschd/SPR2023/humbio.html"],
    ["IMMUN", "https://www.washington.edu/students/timeschd/SPR2023/immun.html"],
    ["LAB M", "https://www.washington.edu/students/timeschd/SPR2023/labmed.html"],
    ["PATH", "https://www.washington.edu/students/timeschd/SPR2023/patho.html"],
    ["MEDSCI", "https://www.washington.edu/students/timeschd/SPR2023/medsci.html"],
    ["MED EM", "https://www.washington.edu/students/timeschd/SPR2023/medem.html"],
    ["GCNSL", "https://www.washington.edu/students/timeschd/SPR2023/gcnsl.html"],
    ["MED", "https://www.washington.edu/students/timeschd/SPR2023/medicine.html"],
    ["MEDECK", "https://www.washington.edu/students/timeschd/SPR2023/medeck.html"],
    ["MEDRCK", "https://www.washington.edu/students/timeschd/SPR2023/medrck.html"],
    ["MICROM", "https://www.washington.edu/students/timeschd/SPR2023/microbio.html"],
    ["MOLMED", "https://www.washington.edu/students/timeschd/SPR2023/molmed.html"],
    ["NEUR S", "https://www.washington.edu/students/timeschd/SPR2023/neurosurg.html"],
    ["NEURL", "https://www.washington.edu/students/timeschd/SPR2023/neurl.html"],
    ["OB GYN", "https://www.washington.edu/students/timeschd/SPR2023/obgyn.html"],
    ["OPHTH", "https://www.washington.edu/students/timeschd/SPR2023/ophthal.html"],
    ["ORTHP", "https://www.washington.edu/students/timeschd/SPR2023/orthop.html"],
    ["OTOHN", "https://www.washington.edu/students/timeschd/SPR2023/otol.html"],
    ["PEDS", "https://www.washington.edu/students/timeschd/SPR2023/pediat.html"],
    ["PHCOL", "https://www.washington.edu/students/timeschd/SPR2023/pharma.html"],
    ["P BIO", "https://www.washington.edu/students/timeschd/SPR2023/physiolbio.html"],
    ["PBSCI", "https://www.washington.edu/students/timeschd/SPR2023/psychbehav.html"],
    ["R ONC", "https://www.washington.edu/students/timeschd/SPR2023/radonc.html"],
    ["RADGY", "https://www.washington.edu/students/timeschd/SPR2023/radiol.html"],
    ["RHB PO", "https://www.washington.edu/students/timeschd/SPR2023/rhbpo.html"],
    ["REHAB", "https://www.washington.edu/students/timeschd/SPR2023/rehab.html"],
    ["SURG", "https://www.washington.edu/students/timeschd/SPR2023/surg.html"],
    ["UROL", "https://www.washington.edu/students/timeschd/SPR2023/uro.html"],
    ["IECMH", "https://www.washington.edu/students/timeschd/SPR2023/iecmh.html"],
    ["NSG", "https://www.washington.edu/students/timeschd/SPR2023/nsg.html"],
    ["NURS", "https://www.washington.edu/students/timeschd/SPR2023/nursing.html"],
    ["NCLIN", "https://www.washington.edu/students/timeschd/SPR2023/nursingcl.html"],
    ["NMETH", "https://www.washington.edu/students/timeschd/SPR2023/nursingmeth.html"],
    ["HEOR", "https://www.washington.edu/students/timeschd/SPR2023/heor.html"],
    ["MEDCH", "https://www.washington.edu/students/timeschd/SPR2023/medchem.html"],
    ["PCEUT", "https://www.washington.edu/students/timeschd/SPR2023/pharmceu.html"],
    ["PHARM", "https://www.washington.edu/students/timeschd/SPR2023/pharmacy.html"],
    ["PHRMCY", "https://www.washington.edu/students/timeschd/SPR2023/phrmcy.html"],
    ["PHARMP", "https://www.washington.edu/students/timeschd/SPR2023/pharmp.html"],
    ["PHRMPR", "https://www.washington.edu/students/timeschd/SPR2023/phrmpr.html"],
    ["PHRMRA", "https://www.washington.edu/students/timeschd/SPR2023/phrmra.html"],
    ["PUBPOL", "https://www.washington.edu/students/timeschd/SPR2023/pubpol.html"],
    ["PPM", "https://www.washington.edu/students/timeschd/SPR2023/ppm.html"],
    ["BIOST", "https://www.washington.edu/students/timeschd/SPR2023/biostat.html"],
    ["ENV H", "https://www.washington.edu/students/timeschd/SPR2023/envh.html"],
    ["EPI", "https://www.washington.edu/students/timeschd/SPR2023/epidem.html"],
    ["HIHIM", "https://www.washington.edu/students/timeschd/SPR2023/95hihim.html"],
    ["HSERV", "https://www.washington.edu/students/timeschd/SPR2023/hlthsvcs.html"],
    ["HSMGMT", "https://www.washington.edu/students/timeschd/SPR2023/hsmgmt.html"],
    ["NUTR", "https://www.washington.edu/students/timeschd/SPR2023/nutrit.html"],
    ["PABIO", "https://www.washington.edu/students/timeschd/SPR2023/pathobio.html"],
    ["PHG", "https://www.washington.edu/students/timeschd/SPR2023/phg.html"],
    ["PHI", "https://www.washington.edu/students/timeschd/SPR2023/phi.html"],
    ["SPH", "https://www.washington.edu/students/timeschd/SPR2023/sph.html"],
    ["A S", "https://www.washington.edu/students/timeschd/SPR2023/88aerosci.html"],
    ["M SCI", "https://www.washington.edu/students/timeschd/SPR2023/88milsci.html"],
    ["N SCI", "https://www.washington.edu/students/timeschd/SPR2023/88navsci.html"],
    ["SOC WF", "https://www.washington.edu/students/timeschd/SPR2023/socwlbasw.html"],
    ["SOC WL", "https://www.washington.edu/students/timeschd/SPR2023/socwl.html"],
    ["SOC W", "https://www.washington.edu/students/timeschd/SPR2023/socwk.html"],

  ]);

  return course.get(id);

}